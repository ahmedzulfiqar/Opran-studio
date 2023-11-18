import React, { useEffect, useState } from "react";

import Card from "../desginblocks/Card";
import Artdata from "../desginblocks/Artdata";
function Worksec() {
  const [data, setdata] = useState(Artdata);
  return (
    <div className="row   shadow  m-0 mt-md-5 pt-0 justify-content-start h- px-md-5 px-4 ">
      {/*  <div className="col-lg-12 col-12 mt-5 py-5 pb-0 px-3  ">
        <div className="display-3 text-light mb-3 ">
          Works of <span className="text-main"> OPRAN STUDIO</span>
        </div>
        <p className="fw-lighta text-light">
          Step into our virtual gallery and explore the diverse landscapes,
          characters, and stories that make up the tapestry of Opran Studio's 3D
          artistry. It's more than just a portfolio; it's an invitation to
          experience the limitless possibilities of the digital canvas.
        </p>
      </div>
  */}
      <div className="col-12 py-0 px-0 ">
        <div className="row my-0  justify-content-center">
          {data.map((datas) => {
            return <Card data={datas} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Worksec;
