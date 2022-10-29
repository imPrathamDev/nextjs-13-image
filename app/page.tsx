import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/replay-chat-dd920.appspot.com/o/j-images%2Fbanner%20(1).png?alt=media&token=8963b61f-bf65-4c95-b5ef-f9be13584397"
        alt="Vercel Logo"
        blurDataURL={
          "https://firebasestorage.googleapis.com/v0/b/replay-chat-dd920.appspot.com/o/j-images%2Fbanner%20(1).png?alt=media&token=8963b61f-bf65-4c95-b5ef-f9be13584397"
        }
        placeholder="blur"
        fill
      />
    </div>
  );
}
