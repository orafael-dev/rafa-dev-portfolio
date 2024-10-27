export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={58} height={49} />
        </Link>
      </div>
    </header>
  );
};
