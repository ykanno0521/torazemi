import React from 'react'
import Article from './Article'
// import {Foo, Bar} from './components/FooBar';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'


// Reactコンポーネントを継承して、Blogクラスを作成
class Blog extends React.Component {
  // クラスなので、コンストラクタの初期化が必要
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      // count state設定
      count: 0
    }
  }

  componentDidMount(){
    // ボタンがクリックされたら「いいね」をカウントアップする
    document.getElementById("counter").addEventListener('click', this.countUp)
  }

  componentDidUpdate(){
    console.log(this.state.count)
    // クリックするごとに呼ばれているが、条件が当てはまる時だけ、処理が走る
    if (this.state.count >= 10) {
      this.setState({count: 0})
    }
  }

  componentDidWillMount(){
    document.getElementById("counter").removeEventListener('click', this.countUp)
  }
  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <div>
        <Article
          title={"React"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        {/* <Foo /> */}
        {/* <Bar /> */}
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </div>
    )
  }
}

export default Blog