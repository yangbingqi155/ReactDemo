"use strict";

var HelloTag = React.createClass({
    displayName: "HelloTag",

    propTypes: {
        id: React.PropTypes.string.isRequired
    },
    getDefaultProps: function getDefaultProps() {
        return {
            title: 'React default props'
        };
    },
    render: function render() {
        return React.createElement(
            "ol",
            { title: this.props.title },
            React.Children.map(this.props.children, function (child) {
                return React.createElement(
                    "li",
                    null,
                    child
                );
            })
        );
    }
});
var InputTag = React.createClass({
    displayName: "InputTag",

    getInitialState: function getInitialState() {
        return { value: "Hello" };
    },
    render: function render() {
        var value = this.state.value;
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", ref: "inputFocus", value: value, onChange: this.handleValueChange }),
            React.createElement("input", { type: "button", value: "Click", onClick: this.handleClick })
        );
    },
    handleClick: function handleClick() {
        this.refs.inputFocus.focus();
    },
    handleValueChange: function handleValueChange(event) {
        this.setState({ value: event.target.value });
    }
});
var LikeButton = React.createClass({
    displayName: "LikeButton",

    getInitialState: function getInitialState() {
        return { liked: false };
    },
    handleLike: function handleLike() {
        this.setState({ liked: !this.state.liked });
    },
    render: function render() {
        var text = this.state.liked ? "like" : "don't haven't liked";
        return React.createElement(
            "p",
            { onClick: this.handleLike },
            "You ",
            text,
            " this,Click to toggle."
        );
    }
});
ReactDOM.render(React.createElement(
    HelloTag,
    { name: "YBQ", id: "123", className: "2017", htmlFor: "html" },
    React.createElement(
        "span",
        null,
        "JAVA"
    ),
    React.createElement(
        "span",
        null,
        "C#"
    )
), $("#helloworld").get(0));
ReactDOM.render(React.createElement(InputTag, null), $("#example").get(0));
ReactDOM.render(React.createElement(LikeButton, null), $("#likedButton").get(0));