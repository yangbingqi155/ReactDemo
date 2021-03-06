﻿const React = require('react');
const ReactDOM = require('react-dom');
var HelloTag = React.createClass({
    propTypes:{
        id:React.PropTypes.string.isRequired,
    },
    getDefaultProps:function(){
        return {
            title:'React default props',
        };
    },
    render:function(){
        return (
        <ol title={this.props.title}>
            {
                React.Children.map(this.props.children,function(child){
                    return <li>{child}</li>;
                })
            }
        </ol>
            );
}
});
var InputTag=React.createClass({
    getInitialState:function(){
        return {value:"Hello"};
    },
    render:function(){
        var value=this.state.value;
        return (
            <div>
                <input type="text" ref="inputFocus" value={value} onChange={this.handleValueChange} />
                <input type="button" value="Click" onClick={this.handleClick} />
            </div>
            );
},
handleClick:function(){
    this.refs.inputFocus.focus();
},
handleValueChange:function(event){
    this.setState({value:event.target.value});
}
});
var LikeButton=React.createClass({
    getInitialState:function(){
        return {liked:false};
    },
    handleLike:function(){
        this.setState({liked:!this.state.liked});
    },
    render:function(){
        var text=this.state.liked?"like":"don't haven't liked";
        return (
            <p onClick={this.handleLike}>
                You {text} this,Click to toggle.
            </p>
            );
}
});
ReactDOM.render(
    <HelloTag name="YBQ" id="123" className="2017" htmlFor="html" >
        <span>JAVA</span>
        <span>C#</span>
    </HelloTag>,
$("#helloworld").get(0)
    );
ReactDOM.render(
    <InputTag />,
    $("#example").get(0)
);
ReactDOM.render(
    <LikeButton />,
    $("#likedButton").get(0)
);