import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <DndProvider backend={HTML5Backend}>
      <AnimatePresence mode="wait">
        <Layout>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                y: 50,
              },
              animateState: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1,
                  duration: 1,
                },
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </AnimatePresence>
    </DndProvider>
  );
}
