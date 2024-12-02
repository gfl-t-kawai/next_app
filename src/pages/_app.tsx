import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeaderNavigation } from '@/components/layout/HeaderNavigation';
import { CartProvider } from '@/hooks/useCart';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <HeaderNavigation />
      <Component {...pageProps} />
    </CartProvider>
  );
}
