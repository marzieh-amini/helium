const PersonalAuthor = () => {
  return (
    <div className="personal-author">
      <div className="personal-author_title">
        <h2> شخصی سازی</h2>
      </div>

      <div className="personal-author_content">
        <div>
          <h3>فونت</h3>
          <div className="content-box">
            <button className="btn btn__primary_outline">IRANSans</button>
            <button className="btn btn__primary">Bahij Helvetica</button>
            <button className="btn btn__primary_outline">Kalameh</button>
          </div>
        </div>
        <div>
          <h3>رنگ فونت</h3>
          <div className="content-box">
            <span className="dark-grey selected"></span>
            <span className="black-grey"></span>
            <span className="warm-grey"></span>
            <span className="blue-grey"></span>
          </div>
        </div>
        <div>
          <h3>سایر فونت</h3>

          <div className="content-box">
            <button className="btn btn__primary_outline">Lg</button>
            <button className="btn btn__primary">Md</button>
            <button className="btn btn__primary_outline">Sm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAuthor;
