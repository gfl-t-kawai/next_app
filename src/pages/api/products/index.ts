import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: '1', name: 'デニムシャツ', image: '/images/asgnbwkpuwtlo2sbfp1a.png', price: 2980 },
  { id: '2', name: 'ヨガマット', image: '/images/cswcnngmwthcr1o6qgxr.png', price: 3480 },
  { id: '3', name: '靴', image: '/images/fiq17k43u7gnwkzlmorh.png', price: 4800 },
  { id: '4', name: '腕時計', image: '/images/gwibrkyhnl4hom2wsuyc.png', price: 298000 },
  { id: '5', name: 'チョコレート', image: '/images/irvng9fvi32xfs3u1vng.png', price: 280 },
  { id: '6', name: 'ワインボトル', image: '/images/mxg2dbepqly2fsbrmlvj.png', price: 1800 },
  { id: '7', name: 'ベビーベッド', image: '/images/rl6hutknpc2ajnvemdvo.png', price: 9990 },
  { id: '8', name: '椅子', image: '/images/rr6ak7shsp6z4jivvlsm.png', price: 4800 },
  { id: '9', name: 'バッグ', image: '/images/tdivvmjmdikwyaz20edh.png', price: 8800 },
  { id: '10', name: 'スマートフォン', image: '/images/vtafgxa0tejdyqsqoi7b.png', price: 198000 },
  { id: '11', name: 'アクセサリー', image: '/images/xhxbjzqmfaa4et8q63bo.png', price: 598000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
