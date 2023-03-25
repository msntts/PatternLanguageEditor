export type Pattern = {
  id: number
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

export const initialState = {
  patterns: [
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
    {
      id: 1,
      name: '業務の付加価値',
      context:
        'これまで表計算ソフトで管理していたデータを、kintoneアプリ化して業務改善を実現したいと考えている。',
      imgPath: '',
      problem:
        'kintoneを使った業務改善を闇雲に進めても、対象となる業務の真の目的に寄与しない場合がある。',
      fource: '日々の業務に追われ、目的を見失っている',
      solution:
        '対象となる「業務の付加価値」は何かを明確にしたうえで、業務改善のアプローチを決める。',
      result:
        '業務改善によって伸ばしたい【業務の付加価値】(1-05)が明確になることで、手段と目的がそぐわない事態を未然に防ぐことができる。',
    },
  ] as Pattern[],
}
