import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ADD_ITEM_TODO} from '../constants/todo_types';
import Post from '../Post_description';
import { addTodo } from '../actions/todoAction';
import { userPosts } from '../reducers/userPostsData';
import { Input, List, Background, Button, PostBlock } from './inputs_styled.js';


class Posts extends Component {
  state = {
    value: '',
    imageUrl: '',
    author: '',
    ava: '',
    posts: userPosts
  }


  changeTextInput = (e) => {
    this.setState({ 
      value: e.target.value 
    })
  }

  changeImageInput = (e) => {
    this.setState({ 
      imageUrl: e.target.value 
    })
}

  onChangeAuthor=(e)=>{
    this.setState({ author: e.target.value })
  }

  saveValueInput = () => {

    this.props.dispatch(addTodo({
      type: ADD_ITEM_TODO,
      text: this.state.value,
      image: this.state.imageUrl,
      name: this.state.author,
      nickname: "@" + this.state.author.toLocaleLowerCase().toString().replace(/\s/g, ''),
      photo: this.state.author === 'Harry Poter'? (this.state.ava = 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85') : 
        this.state.author === 'John Cena'? (this.state.ava = 'https://sun6-16.userapi.com/c846020/v846020635/71579/UKw0hOXcuFs.jpg?ava=1') : 
        this.state.author === 'Thomas Shelby'? (this.state.ava = 'https://sun9-18.userapi.com/c854324/v854324158/163df5/Y52VCm9baHc.jpg?ava=1') : ""
  }));

    this.setState({
      value: '',
      imageUrl: ''
    }) 
  }

  render () {
    const posts = this.state.posts;
    
    return (
      <Background>
        <center>
        <Input
          type='text'
          onChange={this.changeTextInput} 
          value={this.state.value}
          placeholder='Post`s text'
        />
        <Input
          onChange={this.changeImageInput}
          value={this.state.imageUrl}
          type='text' 
          placeholder='Image url'
        />
        <List onChange={this.onChangeAuthor} >
              <option value="Harry Poter"> Harry Poter </option>
              <option value="John Cena"> John Cena </option>
              <option value="Thomas Shelby"> Thomas Shelby </option>
        </List> 

        <Button onClick={this.saveValueInput}>Add</Button>

        {
          posts.map((post, index)=>(
          <PostBlock>
            <Post
              key={post+index}
              name = {post.name}
              photo = {post.photo}
              nickname = {post.nickname}
              content={post.content}
              image={post.image}
              date={post.date}
              comments = {post.comments}
              retweets =  {post.retweets}
              likes = {post.likes}
            />
          </PostBlock>
          )) 
        }

        <PostBlock>
        {
          this.props.data.map((item, index) => (
          <Post
            key={item+index}
            name = {item.name}
            photo = {item.photo}
            nickname = {item.nickname}
            content={item.text}
            image={item.image}
            date={" · " + new Date().getDate() + ".0" + parseInt(new Date().getMonth() + 1) 
              +  "." + new Date().getFullYear()}
            comments = {400}
            retweets =  {120}
            likes = {1200} 
          />
          )) 
        }
        </PostBlock>
        </center>
      </Background>
    );
  }
}

function mapStateToProps(state){
    console.log(state)
    return { 
      data: state.addPost,
     }
}

export default connect(mapStateToProps)(Posts);