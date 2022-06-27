import Header from '~/components/Layouts/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
