const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div>Lokasyon bilgisi bekleniyor</div>
    </div>
  );
};

export default Loader;
