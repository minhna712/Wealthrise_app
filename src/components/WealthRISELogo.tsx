/* Uses the original WealthRISE PNG logo asset. */
const LOGO_SRC = new URL("../imports/Codex_Image_Sep_12__2026__10_35_10_AM.png", import.meta.url).href;

interface Props {
  size?: number;
}

export default function WealthRISELogo({ size = 80 }: Props) {
  return (
    <img
      src={LOGO_SRC}
      width={size}
      height={size}
      alt="WealthRISE logo"
      style={{ display:"block", objectFit:"contain" }}
      draggable={false}
    />
  );
}
