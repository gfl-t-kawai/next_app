import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: '1', name: 'デニムシャツ', image: '/images/asgnbwkpuwtlo2sbfp1a.png', price: 2980, description: 'このライトブルーのデニムシャツは、シンプルでありながら洗練されたデザインが魅力です。柔らかなデニム生地を使用し、快適さと耐久性を兼ね備えています。カジュアルからフォーマルまで幅広いシーンで活躍する万能アイテムです。', stock: 5 },
  { id: '2', name: 'ヨガマット', image: '/images/cswcnngmwthcr1o6qgxr.png', price: 3480, description: '心地よいラベンダーパープルのヨガマットは、初心者から上級者まで幅広い方におすすめのアイテムです。適度なクッション性と滑り止め加工が施されており、快適で安全なヨガやストレッチをサポートします。', stock: 8 },
  { id: '3', name: '靴', image: '/images/fiq17k43u7gnwkzlmorh.png', price: 4800, description: '高級感あふれるブラックレザーを使用したスニーカー。快適な履き心地とスタイリッシュなデザインで、カジュアルからフォーマルまで幅広いコーディネートに対応します。長時間の使用でも疲れにくい設計です。', stock: 10 },
  { id: '4', name: '腕時計', image: '/images/gwibrkyhnl4hom2wsuyc.png', price: 298000, description: '精密な技術と洗練されたデザインが融合した高級腕時計。ステンレススチールの輝きが手元を美しく彩り、日常から特別な場面まで幅広く活躍します。耐久性と機能性を兼ね備えた一品です。', stock: 3 },
  { id: '5', name: 'チョコレート', image: '/images/irvng9fvi32xfs3u1vng.png', price: 280, description: '濃厚でビターな味わいが楽しめるプレミアムダークチョコレート。一口ごとに広がるカカオの香りと滑らかな口溶けが至福の時間を演出します。贅沢なおやつやギフトにもぴったりです。', stock: 50 },
  { id: '6', name: 'ワインボトル', image: '/images/mxg2dbepqly2fsbrmlvj.png', price: 1800, description: '上質な赤ワインが詰まったエレガントなボトル。深みのある味わいと芳醇な香りが特徴で、特別なディナーや贈り物に最適です。シンプルで洗練されたデザインのラベルは、どんなシーンにもマッチします。', stock: 20 },
  { id: '7', name: 'ベビーベッド', image: '/images/rl6hutknpc2ajnvemdvo.png', price: 9990, description: 'シンプルで温かみのあるデザインが特徴の木製ベビーベッド。丈夫な天然木を使用し、赤ちゃんの安全と快適さを第一に考えた設計です。どんなインテリアにも馴染むナチュラルな仕上げで、組み立ても簡単。成長に合わせて高さ調節が可能で、長くお使いいただけます。', stock: 5 },
  { id: '8', name: '椅子', image: '/images/rr6ak7shsp6z4jivvlsm.png', price: 4800, description: '北欧風のミニマルなデザインが魅力的な木製チェア。高品質な天然木を使用し、滑らかな曲線と丁寧な仕上げで座り心地抜群。ダイニングやワークスペースに最適で、どんな空間にも自然に溶け込みます。', stock: 8 },
  { id: '9', name: 'バッグ', image: '/images/tdivvmjmdikwyaz20edh.png', price: 8800, description: 'クラシックでエレガントなデザインの本革ハンドバッグ。上質なレザーを使用し、耐久性と美しさを兼ね備えています。収納力も抜群で、日常使いから特別なシーンまで幅広く活用できる一品です。', stock: 12 },
  { id: '10', name: 'スマートフォン', image: '/images/vtafgxa0tejdyqsqoi7b.png', price: 198000, description: '洗練されたデザインと高性能を兼ね備えた最新スマートフォン。大画面ディスプレイとスリムなボディが魅力で、日常使いからビジネスまで幅広く活躍します。高解像度カメラや長時間バッテリーなど、機能性も充実。', stock: 50 },
  { id: '11', name: 'アクセサリー', image: '/images/xhxbjzqmfaa4et8q63bo.png', price: 598000, description: 'ラグジュアリーな輝きを放つゴールドチェーンネックレス。職人技が光る緻密なデザインで、シンプルながらも圧倒的な存在感を演出します。特別なシーンやフォーマルな装いにぴったりの一品。高品質な素材を使用し、長く愛用いただける価値あるジュエリーです。', stock: 2 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }

  res.status(200).json(product);
}
