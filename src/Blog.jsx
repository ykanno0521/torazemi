import React from 'react'
import Article from './Article'
// import {Foo, Bar} from './components/FooBar';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'


const Blog = () => {

  // componentDidMount(){
  //   // ボタンがクリックされたら「いいね」をカウントアップする
  //   document.getElementById("counter").addEventListener('click', this.countUp)
  // }

  // componentDidUpdate(){
  //   console.log(this.state.count)
  //   // クリックするごとに呼ばれているが、条件が当てはまる時だけ、処理が走る
  //   if (this.state.count >= 10) {
  //     this.setState({count: 0})
  //   }
  // }

  // componentDidWillMount(){
  //   document.getElementById("counter").removeEventListener('click', this.countUp)
  // }



  // countUp = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // render() {
  return(
    <>
      <Article
        title={"React"}
      />
      {/* <Foo /> */}
      {/* <Bar /> */}
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
  // }
}

export default Blog