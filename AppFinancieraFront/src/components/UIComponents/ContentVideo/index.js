import React from 'react';

function ContentVideo () {
     return (
      <div className="d-flex justify-content-center">
          <div className="w-75 text-justify my-4">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen name="classVideo"></iframe>
             </div>
          </div>
      </div>
    )
}

export default  ContentVideo;