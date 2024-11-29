import { Meta, StoryFn } from '@storybook/react';
import { ProductDetails } from './ProductDetails';
import { http, HttpResponse } from 'msw';
import { mswDecorator } from 'msw-storybook-addon';

export default {
  title: 'Components/Products/ProductDetails',
  component: ProductDetails,
  decorators: [mswDecorator],
  parameters: {
    msw: {
      handlers: [
        // モックデータの設定
        http.get('http://localhost:6006/api/products/:id',({ params }) =>  {
          const { id } = params;
          console.log('Intercepted request with params:', params);
          if (id == '1') {
            return HttpResponse.json(
              {
                id: 1,
                name: 'サンプル商品',
                description: 'This is a sample product description.',
                price: 2990,
                stock: 10,
                image: '/images/dummy.png',
              },
              { status: 200 }
            );
          }
          return new HttpResponse('Product not found', { status: 404 });
        }),
      ],
    },
  },
} as Meta<typeof ProductDetails>;

// Template 定義
const Template: StoryFn<{ productId: number }> = (args) => {
  return <ProductDetails productId={args.productId} />;
};

// ストーリー定義

/** 正常データ取得ストーリー */
export const Default = Template.bind({});
Default.args = {
  productId: 1, // 正常データ
};

/** エラー発生ストーリー */
export const Error = Template.bind({});
Error.args = {
  productId: 99, // 存在しない ID によるエラー
};

/** ローディング状態ストーリー */
export const Loading = Template.bind({});
Loading.parameters = {
  msw: {
    handlers: [
      http.get('http://localhost:6006/api/products/:id', () => {
        // ローディング状態をシミュレート（2秒遅延）
        return new Promise(() => {}); // 無限プロミスでローディング状態を再現
      }),
    ],
  },
};
