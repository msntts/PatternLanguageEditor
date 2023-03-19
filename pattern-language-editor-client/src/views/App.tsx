import React from 'react'
import './App.css'
import PatternComponent from './components/PatternComponent'

function App() {
  return (
    <div className="App">
      <PatternComponent
        name="おしゃれな見た目"
        imgPath=""
        context="自分たちのコンテンツを展示し、興味を持ってもらおうとしている"
        problem="他にもたくさんの展示があり、自分の展示が埋もれてしまう"
        fource="見てくれる全員を捕まえて詳しい説明をする時間がない"
        solution="コンテンツの入り口となる部分の見た目をよくして興味を持ってもらおう"
        result="自分たちのコンテンツに興味を持ってもらうきっかけを増やせる"
      ></PatternComponent>
    </div>
  )
}

export default App
