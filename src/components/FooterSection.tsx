import { useCallback } from "react";

function useExternalLink(url: string) {
  return useCallback(() => {
    window.open(url, "_blank");
  }, [url]);
}

function FooterSection() {
  const handleCode = useExternalLink("https://github.com/shivaKotagiri/");

  return (
    <div className="justify-center flex-col w-full p-5">
      <div className="text-gray-500 text-center">
        --- Made By
        <span onClick={handleCode} className="text-[#146fb5] font-semibold cursor-pointer"> Shiva Kumar Kotagiri</span>, inspired by
        <span className="text-[#146fb5] font-semibold cursor-pointer"> Dukaan App UI </span>
        ---
      </div>
      <div onClick={handleCode} className="text-gray-500 underline text-center p-2 cursor-pointer">
        Get the source code
      </div>
    </div>
  );
}

export default FooterSection;
