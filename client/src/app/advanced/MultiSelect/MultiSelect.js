import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {styles} from './styles';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import _ from '../../utils/lodash';
import Collapse from "@material-ui/core/Collapse";
import categories from '../../fake-db/categories';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import TextField from "@material-ui/core/TextField";

let classNames = require('classnames');

export class MultiSelect extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            open: false,
            category: null,
            search: '',

            rotate: false,
            openIcon: "box-open-primary",
        }
    }

    handleDrawer = (open) => event =>
    {
        this.setState({ open });
    };

    handleList = (category) => event =>
    {
        if (this.state.category === null || this.state.category !== category)
        {
            this.setState({ category });
        }
        else
        {
            this.setState({ category: null });
        }
    };

    rotateButton = (rotate) => event =>
    {
        let avatar = document.getElementById("genres-background-avatar");
        let ct = window.getComputedStyle(avatar, null);
        let transform = ct.getPropertyValue("transform");

        if (transform !== "none")
        {
            let trigonometry = transform.substr(7, transform.length - 2).split(',');

            let rotation = Math.round(Math.atan2(parseFloat(trigonometry[1]), parseFloat(trigonometry[0])) *
                (180/Math.PI));

            rotation = rotation < 0 ? rotation + 360 : rotation;

            avatar.style.transform = 'rotate(' + rotation + 'deg)';
        }

        this.setState({ rotate });
    };

    countGenres = () =>
    {
        let genres = [];

        this.props.items.map(item => genres = _.concat(genres, item.genres));

        return genres.length;
    };

    checkSelectedItem = (item, type) =>
    {
        if (type === 'Category')
        {
            let genres = [];
            let categories = [];

            this.props.items.map(item => genres = _.concat(genres, item.genres));

            this.props.selected.map(genre => _.find(genres, function (g) { return g.id === genre; }) ?
                categories.push(_.find(genres, function (g) { return g.id === genre; }).category) : null);

            return categories.includes(item.id);
        }
        else if (type === 'Genre')
        {
            return this.props.selected.includes(item.id);
        }
        else
        {
            return false;
        }
    };

    getGenreInfos = (id) =>
    {
        let genres = [];

        this.props.items.map(item => genres = _.concat(genres, item.genres));

        let genre = _.find(genres, function (g) { return g.id === id; });

        if (genre)
        {
            let category1 = _.find(categories, function (c) { return c.id === genre.category; });
            let category2 = _.find(this.props.items, function (c) { return c.id === genre.category; });

            if (category1 && category2)
            {
                return {
                    category: category2.name,
                    image: category1.name,
                    genre: genre.name
                }
            }

            return null;
        }

        return null;
    };

    handleSearchChange = event =>
    {
        this.setState({ search: event.target.value });
    };

    adjustData = (items) =>
    {
        function searchItem(item, data)
        {
            if (item.name.toLowerCase().includes(search))
            {
                data.push(item);
            }
            else
            {
                let genres = 0;

                item.genres.map(genre => genre.name.toLowerCase().includes(search) ? genres++ : null)

                if (genres > 0)
                {
                    data.push(item);
                }
            }
        }

        const search = this.state.search.toLowerCase();

        if (search !== '')
        {
            let data = [];

            items.map(item => searchItem(item, data));

            return _.orderBy(data, [function(c) { return c.genres.length; }, 'name'], ['desc']);
        }

        return _.orderBy(items, [function(c) { return c.genres.length; }, 'name'], ['desc']);
    };

    render()
    {
        const {classes, items, selected, onGenreSelect} = this.props;
        const {category, search, open, rotate} = this.state;

        const data = this.adjustData(items);

        return (
            <div className={classes.root}>
                <div
                    className={classes.container}
                    onClick={this.handleDrawer( !open )}
                    onMouseOver={this.rotateButton(true)}
                    onMouseOut={this.rotateButton(false)}
                >
                    <Avatar
                        id="genres-background-avatar"
                        src={process.env.PUBLIC_URL + "/images/genres-grid.jpg"}
                        alt={"Genres"}
                        variant="circle"
                        className={classNames(classes.avatar, (rotate && classes.animate))}
                    />

                    <Typography
                        variant="body2"
                        className={classes.heading}
                    >
                        Browse Our Genres Collection
                    </Typography>
                </div>


                {selected.length > 0 ?
                    (<GridList
                        className={classes.grid_list}
                        cols={3.5}
                    >
                        {selected.map((genre) => (this.getGenreInfos(genre) &&
                            (<GridListTile
                                key={genre}
                                style={{
                                    height: '100%',
                                    padding: selected.indexOf(genre) === selected.length - 1 ? '0 5px 0 0' : 0
                                }}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + "/images/categories/reggae.jpg"}
                                    alt={this.getGenreInfos(genre).genre}
                                />

                                <GridListTileBar
                                    title={this.getGenreInfos(genre).genre}
                                    classes={{
                                        root: classes.bar,
                                        title: classes.barTitle,
                                    }}
                                    actionIcon={
                                        <Avatar
                                            src={process.env.PUBLIC_URL + "/icons/remove-neutral.png"}
                                            alt="-"
                                            variant="square"
                                            className={classes.action_avatar}
                                            onClick={onGenreSelect(genre)}
                                        />
                                    }
                                />
                            </GridListTile>)
                        ))}
                    </GridList>)
                    :
                    (<div
                        className={classes.container_1}
                    >
                        <Typography
                            variant="caption"
                            className={classes.heading_1}
                        >
                            No genres were selected yet for this artist.
                        </Typography>
                    </div>)
                }

                <Drawer
                    anchor="right"
                    open={open}
                    onClose={this.handleDrawer(false)}
                    classes={{paper: classes.paper}}
                >
                    <div className={classes.container_2}>
                        <Avatar
                            src={process.env.PUBLIC_URL + "/icons/box-open-secondary.png"}
                            alt={"Box"}
                            variant="square"
                            className={classes.avatar_1}
                        />

                        <Typography
                            variant="body2"
                            className={classes.heading_2}
                        >
                            Our Genres Collection
                        </Typography>

                        <Typography
                            variant="caption"
                            className={classes.heading_2_caption}
                        >
                            {"(" + items.length + " genres, " + this.countGenres() + " subgenres" + ")"}
                        </Typography>
                    </div>

                    <div className={classes.container_search}>
                        <TextField
                            type="text"
                            value={search}
                            onChange={this.handleSearchChange}
                            className={classes.textField}
                            placeholder="Search..."
                            InputProps={{classes: {root: classes.input}, disableUnderline: true}}
                        />
                    </div>

                    {data.map(item =>
                        (item.genres.length > 0 &&
                            (<div className={classes.wrapper}>
                                <div
                                    className={this.checkSelectedItem(item, 'Category') ?
                                        classes.container_3_selected : classes.container_3}
                                    onClick={this.handleList(data.indexOf(item))}
                                >
                                    <Typography
                                        variant="body2"
                                        className={this.checkSelectedItem(item, 'Category') ?
                                            classes.heading_3_selected : classes.heading_3}
                                    >
                                        {item.name}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        className={this.checkSelectedItem(item, 'Category') ?
                                            classes.heading_4_selected : classes.heading_4}
                                    >
                                        ({item.genres.length === 1 ? "One genre" :
                                            item.genres.length + " genres"})
                                    </Typography>
                                </div>

                                <Collapse in={category === data.indexOf(item)}>
                                    <div className={classes.container_4}>
                                        {item.genres.map(genre =>
                                        <div
                                            className={this.checkSelectedItem(genre, 'Genre') ?
                                                classes.container_5_selected : classes.container_5}
                                            onClick={onGenreSelect(genre.id)}
                                        >
                                            <Typography
                                                variant="caption"
                                                className={classes.heading_5}
                                            >
                                                {genre.name}
                                            </Typography>
                                        </div>)}
                                    </div>
                                </Collapse>
                            </div>)))}
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(MultiSelect);