export type PatternItem = {
  id: number
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

export type Patterns = {
  items: Array<PatternItem>
}

export const initialState: Patterns = {
  items: [
    {
      id: 0,
      name: 'おしゃれな見た目',
      context: '自分たちのコンテンツを展示し、興味を持ってもらおうとしている',
      imgPath: '',
      problem: '他にもたくさんの展示があり、自分の展示が埋もれてしまう',
      fource: '見てくれる全員を捕まえて詳しい説明をする時間がない',
      solution: 'コンテンツの入り口となる部分の見た目をよくして興味を持ってもらおう',
      result: '自分たちのコンテンツに興味を持ってもらうきっかけを増やせる',
    },
  ],
}
