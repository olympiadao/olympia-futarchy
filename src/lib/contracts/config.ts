import { http, createConfig } from "wagmi";
import { mordor } from "@/lib/utils/mordor";

export const wagmiConfig = createConfig({
  chains: [mordor],
  transports: {
    [mordor.id]: http(),
  },
  ssr: true,
});
