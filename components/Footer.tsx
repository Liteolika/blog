export default function Footer(props: any) {
  return (
    <footer className={`h-15 bg-gray-100 ${props.className}`}>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
