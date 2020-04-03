import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {styles} from './styles';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MultiSelect from "../../advanced/MultiSelect/MultiSelect";
import * as Actions from '../../store/actions';
import _ from '../../utils/lodash';
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import GridForm from "../../advanced/GridForm/GridForm";

function notice()
{
    const notice_1 = "- The image should be .png, .jpg/.jpeg or .bmp";
    const notice_2 = "- The image should be at least 200x200 (px)";

    return <div style={{
        width: '200px',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <span
            style={{
                margin: '0 0 5px 0',
                fontFamily: 'Merriweather',
                fontWeight: 'bold',
                textAlign: 'justify'
            }}
        >
            {notice_1}
        </span>

        <span
            style={{
                fontFamily: 'Merriweather',
                fontWeight: 'bold',
                textAlign: 'justify'
            }}
        >
            {notice_2}
        </span>
    </div>
}

export class NewArtist extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: '',
            image: null,
            genres: [],
            links: [],

            uploadError: false,
            uploadIcon: "upload-image-secondary"
        }
    }

    async componentDidMount()
    {
        await this.props.getGenresWithCategories();

        await this.props.getExternals();
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        let changed = prevState.name !== this.state.name || prevState.image !== this.state.image;

        if (changed)
        {
            let artist = {
                name: this.state.name,
                image: this.state.image,
                genres: this.state.genres,
                links: this.state.links
            };

            this.props.updateArtistState(artist);
        }
    }

    handleUploadIcon = (uploadIcon) => event =>
    {
        this.setState({ uploadIcon });
    };

    handleNameChange = event =>
    {
        this.setState({ name: event.target.value })
    };

    handleGenreSelect = (id) => event =>
    {
        const genres = this.state.genres;

        const genre = _.find(genres, function (g) { return g === id; });

        if (genre)
        {
            _.remove(genres, function (g) { return g === id; });
        }
        else
        {
            genres.push(id);
        }

        this.setState({ genres });

        let artist = {
            name: this.state.name,
            image: this.state.image,
            genres: genres,
            links: this.state.links
        };

        this.props.updateArtistState(artist);
    };

    handleImageClear = event =>
    {
        this.setState({ image: null });
    };

    handleImageChange = event =>
    {
        let file = event.target.files[0];

        if (file)
        {
            let image = new Image();
            image.src = URL.createObjectURL(file);

            image.onload = () =>
            {
                const checkSize = image.width >= 200 && image.height >= 200;
                const checkType = file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/bmp';

                if (checkType && checkSize)
                {
                    this.setState({image: file})
                }
                else
                {
                    this.setState({ uploadError: true });
                }
            };
        }
    };

    handleLinkSend = (link) =>
    {
        const links = this.state.links;

        const external = _.find(links, function (l) { return l.id === link.id; });

        if (external)
        {
            _.remove(links, function (l) { return l.id === link.id; });
        }

        links.push(link);

        let artist = {
            name: this.state.name,
            image: this.state.image,
            genres: this.state.genres,
            links: links
        };

        this.props.updateArtistState(artist);

        this.setState({ links });
    };

    handleLinkRemove = (link) =>
    {
        const links = this.state.links;

        const external = _.find(links, function (l) { return l.id === link.id; });

        if (external)
        {
            _.remove(links, function (l) { return l.id === link.id; });
        }

        let artist = {
            name: this.state.name,
            image: this.state.image,
            genres: this.state.genres,
            links: links
        };

        this.props.updateArtistState(artist);

        this.setState({ links });
    };

    sendArtist = event =>
    {

    };

    render()
    {
        const {classes, externals, tab, step} = this.props;
        const {name, image, genres, links, uploadError, uploadIcon} = this.state;

        return ( tab === 0 ?
                (<div className={classes.root0}>
                    <form className={classes.form}>
                        {step === 1 &&
                        (<div className={classes.container}>
                            <Typography
                                variant="body2"
                                className={classes.label}
                            >
                                Artist Name
                            </Typography>
                            <TextField
                                type="text"
                                value={name}
                                onChange={this.handleNameChange}
                                className={classes.textField}
                                placeholder="Artist Name"
                                InputProps={{classes: {root: classes.input}, disableUnderline: true}}
                            />
                        </div>)}

                        {step === 2 &&
                        (<div className={classes.container_1}>
                            <Avatar
                                src={image ? URL.createObjectURL(image) :
                                    process.env.PUBLIC_URL + "/images/no-image.png"}
                                alt="Artist"
                                variant="rounded"
                                className={classes.avatar}
                            />

                            <label
                                htmlFor="image-input"
                                className={classes.file_label}
                                onMouseOver={this.handleUploadIcon("upload-image-primary")}
                                onMouseOut={this.handleUploadIcon("upload-image-secondary")}
                            >
                                <Avatar
                                    src={process.env.PUBLIC_URL + "/icons/" + uploadIcon + ".png"}
                                    alt="Upload"
                                    variant="square"
                                    className={classes.label_avatar}
                                />

                                <Typography
                                    variant="caption"
                                    className={classes.label_heading}
                                >
                                    Upload an Image from your Computer
                                </Typography>
                            </label>

                            <input
                                id="image-input"
                                name="file"
                                className={classes.file}
                                type="file"
                                onClick={(event => {this.setState({uploadError: false})})}
                                onChange={this.handleImageChange}
                            />

                            <Tooltip
                                placement="left-start"
                                title={notice()}
                                classes={{tooltip: classes.tooltip}}
                                style={{animation: uploadError ? 'shake infinite 0.5s' : 'none'}}
                            >
                                <Avatar
                                    src={process.env.PUBLIC_URL + "/icons/info-secondary.png"}
                                    alt="info"
                                    variant="square"
                                    className={classes.info_avatar}
                                    onMouseOver={(event => {this.setState({uploadError: false})})}
                                />
                            </Tooltip>

                            {image &&
                            (<Tooltip
                                placement="bottom"
                                title="Clear Image"
                                classes={{tooltip: classes.tooltip_1}}
                                onClick={this.handleImageClear}
                            >
                                <Avatar
                                    src={process.env.PUBLIC_URL + "/icons/remove-image-secondary.png"}
                                    alt="-"
                                    variant="square"
                                    className={classes.remove_avatar}
                                />
                            </Tooltip>)}
                        </div>)}

                        {step === 3 &&
                        (<MultiSelect
                            items={this.props.genres}
                            selected={genres}
                            onGenreSelect={this.handleGenreSelect}
                        />)}

                        {step === 4 &&
                        (<GridForm
                            items={externals}
                            links={links}
                            onLinkSend={this.handleLinkSend}
                            onLinkRemove={this.handleLinkRemove}
                        />)}
                    </form>
                </div>)
                :
                (<div className={classes.root0}>

                </div>)
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getGenresWithCategories: Actions.getGenresWithCategories,
        getExternals: Actions.getExternals,
        updateArtistState: Actions.updateArtistState
    }, dispatch);
}

function mapStateToProps({newArtist})
{
    return {
        genres: newArtist.genres.list,
        externals: newArtist.externals.list
    }
}

export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps) (NewArtist)));