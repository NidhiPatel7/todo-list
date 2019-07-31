// link of todo list example with add and delete etc
// https://www.freakyjolly.com/reactjs-create-todo-application-in-reactjs-using-class-components/


// basic consept of react
// react convert code in js,jsx(x=xml),css,html.
// server(node.js) transpile code react to all other language (like html etc) for browser.

// need node server = npm.

// terminal  = npm -v if you see version you have installed 
// link for installation = https://nodejs.org/en/

// link for create app 
// https://facebook.github.io/create-react-app/docs/getting-started use this module for create app


// terminal 
// cd desktop


// npx create-react-app note-app (note-app name of app)

// cd node-app (note-app name of app)
// npm start (to start http://localhost:3000/ in your browser which is starting point )


// go in app src folder app.js which is react page for coding

// ======when use vs code or sublime and want to check code
// install in sublime or vs code for code and edit option from js to js react


// ======*** steps to send code in github and github to pc ****======
// 1)ADD PROJECT
// cd desktop
// cd foldername
// git init


// git add .


// git commit -m "setup react project"


// git log

// create reposetry and copy 2nd link and enter user name and password



// 2)DOWNLOAD PROJECT
// git clone (clone link from git hub project)



// 3)NPM INSTALL
// cd note-app(project name)

// npm install(its install npm)


// 4)RUN THE CODE

// npm start (to run code)



// =====**** steps ****=====
// 1)change fun to class => class App
// 2)extend parent class => extends Component
// 3)add constructor() and super method bcz of parent class => constructor(props){super(props);}
// 4)create render() in which we put our html code => render()
// 5)inside render add return =>render(return ();)
// 6)inside return copy our html
// 7)replace class= in html to => className=
// 8)for input tag its self close tag => add /
// 9)in app.css add our css
// and if we have bootstrap add in app.css import 'bootstrap cdn link' or copy css file and import it.
// 10)crom allow react code to inspect use this link to install it
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
// and in property click on react
// 11)add notes in class => this.notes = [];
// 12)every time when do list add key means id => key={note.id}


import React,{Component} from 'react';
import frameImage from './Frame.png';

import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      todos:[
          {
              id:1,
              note:'Wake Up',
              span:'aaa',
              status:0,
            },
            {
              id:2,
              note:'Make Coffee',
              span:'bbb',
              status:0,
            },
            {
              id:3,
              note:'Drink Coffee',
              span:'ccc',
              status:0,
            },
            {
              id:4,
              note:'Study',
              span:'adddaa',
              status:1,
            },
           
      ],
      noteInputValue:'',//for input value
      noteInputTitleValue:'',//for input value of title
    }
    // this.todos = [
    //   {
    //     id:1,
    //     note:'Wake Up',
    //     // span:'aaa',
    //   },
    //   {
    //     id:2,
    //     note:'Make Coffee',
    //     //span:'bbb',
    //   },
    //   {
    //     id:3,
    //     note:'Drink Coffee',
    //     //span:'ccc',
    //   },
    //   {
    //     id:4,
    //     note:'Study',
    //     //span:'adddaa',
    //   },
    // ];
  }
  // ===for on change for title===
  handlerInputNoteTitleOnchange = (e) =>
  {
    this.setState({noteInputTitleValue : e.target.value});
  }
  
  // ===for on change when enter value in text====
  handlerInputNoteOnchange = (e) =>
  {
    // console.log(e);
    this.setState({noteInputValue : e.target.value});
    
    //this.setState() using  fun we change value in app(list) means we ask and req to react change things for us
    
  }
//=== for when click it we want to add note===
handlerAddInputOnclick = (e) =>
{
    e.preventDefault();//when click on button not want to jump
    var newNote = {
      id:Date.now(),//create id using time stamp
      note:this.state.noteInputValue,//add newly created note in newNote var
      span:this.state.noteInputTitleValue,
    };
    var newNotes = [newNote,...this.state.todos];//add whole list in newNotes var
    this.setState({
      todos:newNotes,//add all list in main var todos
      noteInputValue:'',//when we create one note we want to clear text feild value we want blank
    });
}
// ==for delete the notes====
removeNoteOnclick = (noteId) => 
{
  var todos = this.state.todos;//we get todos list for filter
  var filterTodos = todos.filter(function(items){
    return items.id !== noteId;
  });
  this.setState({todos:filterTodos});
}
// === for check and uncheck the notes ====
updateStatus = (noteId,statusNew) => 
{

  
  var todos = this.state.todos;//get a list
  var indexTodo = todos.findIndex(function(todo){//we find value from array based on index and we find index based on id
    return todo.id === noteId;
  });


  todos[indexTodo].status = statusNew;//we change status in particular value

  this.setState({todos});//modify list  after  change status 

}

// updateStatus = (id,status) => {

// }
  render()
  {
    return (
      <div className="wrap">
        
        <div className="container">
            <div className="row imgRow">
                    <h1 className="title">My Day</h1>
                    <img className="imgClass" src={frameImage} alt="img"/>
            </div>
          
            <div className="row text-center items">
              {
                // this.state.todos.map(function(todo){
                this.state.todos.map((todo) => {
                  // we want this for i thats why we use arrownotation bcz in simple fun this= undefine nd after arrow notaion this = app
                  return(
                   
                    <div className="col-12 flex" key={todo.id}>

                      <i className="far fa-times-circle note-remove" onClick={(e) => {this.removeNoteOnclick(todo.id)}}></i>
                      {/* we use arrow notation here bcz we want to delete particular note so we want id so we want this 
                and uing arrow notation we get this
                */}
                {
                   (todo.status === 1) ? <del> <p className="blur">{todo.note}</p></del> :  <p>{todo.note}</p>
                }
                   
                    <span>{todo.span}</span>
                    
                    {
                      
                      (todo.status === 1) ?   <i className="fas fa-check-square click" onClick={(e) => {this.updateStatus(todo.id,0)}}></i> : <i className="fas fa-square click " onClick={(e) => {this.updateStatus(todo.id,1)}}></i> 
                    }
                    {/* <i className="fas fa-square click" ></i> */}
                    
                    </div>
                  )
                })
              }
                
                {/* <div className="col-12">
                    <p>Make Coffee</p>
                </div>
                <div className="col-12">
                    <p>Drink Coffee</p>
                </div>
                <div className="col-12">
                    <p>Study</p>
                </div> */}
            </div>
            <form className="form-inline">
                
                <input type="text" className="form-control mb-2 mr-sm-2 col-8" id="inlineFormInputName2" value={this.state.noteInputTitleValue} onChange={this.handlerInputNoteTitleOnchange}  placeholder="Note title"/>
                <input type="text" className="form-control mb-2 mr-sm-2 col-8" id="inlineFormInputName2" value={this.state.noteInputValue} onChange={this.handlerInputNoteOnchange}  placeholder="Note"/>
                <button type="submit" className="btn btn-primary mb-2 col-3" onClick={this.handlerAddInputOnclick}>Add</button>
            </form>
        </div>
    </div>
    );
  }
}

export default App;
