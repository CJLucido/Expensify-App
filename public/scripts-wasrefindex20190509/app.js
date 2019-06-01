'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// //binding

// // const obj = {
// //     name: "vikram",
// //     getName(){
// //         return this.name;
// //     }
// // };

// // const getName = obj.getName.bind(obj);

// // console.log(getName());

// //stateless functional component vs class based component

// //Parent
// class IndecisionApp extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handlePick = this.handlePick.bind(this);  //check
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.state = {
//             options: [],

//         }

//     }

//     handleDeleteOptions(){
//         this.setState (() => {
//             return {
//                 options: []
//             };
//         });
//     };


//     handlePick(){ //check
//       const randomNum = Math.floor(Math.random() * this.state.options.length);
//       const option = this.state.options[randomNum]; //you need the button to define this because if you set it in the constructor clicking the button wont change the value (the value will already be set). Also, setState isn't required if you aren't going to try and change the state, before you tried making a this.option PROPERTY
//        alert(option);
//     };

//     handleAddOption(option){
//         if(!option){
//             return "enter valid value to add item";
//         } else if (this.state.options.indexOf(option) > -1) {
//             return "this option already exists";
//         }

//        this.setState((prevState) => {
//            return{
//                options: prevState.options.concat([option])
//            }
//        });
//     }


//     render(){
//         const title = "Indecison";
//         const subtitle = "Put your life in the hands of a computer";
//        // const options = ["thing one ", 'thing two ', 'thing three']

//         return (
//             <div>
//                 <Header title={title} subtitle={subtitle}/>
//                 <Action 
//                 handlePick={this.handlePick} //check
//                 hasOptions={this.state.options.length > 0}/>
//                 <Options 
//                     options={this.state.options}
//                     handleDeleteOptions={this.handleDeleteOptions}/>
//                 <AddOption 
//                 handleAddOption={this.handleAddOption}
//                 />
//             </div>
//         );
//     }
// }

// //subclass 1
// class Header extends React.Component {
//     render() {
//         return (<div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>);
//     }
// }

// class Action extends React.Component {

//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} //check
//                 disabled={!this.props.hasOptions}>
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     // constructor(props){
//     //         super(props);
//     //         this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }

//     // handleRemoveAll(){
//     //     console.log(this.props.options);
//     // }

//     render() {
//         return (
//         <div>

//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option}/>) //optionText is a key we MADE
//             }
//             <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//         </div>);
//     }
// }

// class AddOption extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.state = {
//             error: undefined
//         };
//     }
//     handleAddOption(e){
//         e.preventDefault(); //the e is the submission


//         const option = e.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option);

//         this.setState(()=>{
//             return{
//                 error //same as error: error
//             }
//         });

//     }
//     render(){
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                 <input type="text" name="option"/>
//                 <button>Add Option</button>
//                 </form>
//             </div>
//         );
//     }
// }


// //subclass2

// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//             Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

// // const User = (props) => { //stateless but still allows for props, do not have access to this. (just like arrow functions). faster than class based components (doesn't have to manage state)
// //     return (
// //         <div>
// //             <p>Name: {props.name}</p>
// //             <p>Age: {props.age}</p>
// //         </div>
// //     )
// // };

// ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

//Parent
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this); //check
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: [] //props.options no longer using because reading from saved data

        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //only available in class based components
            try {

                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                //why add .length? the previous state of options would be different anyway
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("componentWillUnmount");
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            //check
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum]; //you need the button to define this because if you set it in the constructor clicking the button wont change the value (the value will already be set). Also, setState isn't required if you aren't going to try and change the state, before you tried making a this.option PROPERTY
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return "enter valid value to add item";
            } else if (this.state.options.indexOf(option) > -1) {
                return "this option already exists";
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var subtitle = "Put your life in the hands of a computer";
            // const options = ["thing one ", 'thing two ', 'thing three']

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    handlePick: this.handlePick //check
                    , hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps ={ no longer using because reading from saved data
//     options: []
// };

//subclass 1


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision"
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick //check
                , disabled: !props.hasOptions },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    // constructor(props){
    //         super(props);
    //         this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }

    // handleRemoveAll(){
    //     console.log(this.props.options);
    // }


    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        }) //optionText is a key we MADE
        ,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'RemoveAll'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault(); //the e is the submission


            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            }); //removed (rephrased) return

            if (!error) {
                e.target.elements.option.value = "";
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    ' /*ask Teleson why we are using optionText if we have this string property already*/',
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

//subclass2

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        'Option: ',
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }

            },
            'remove'
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
