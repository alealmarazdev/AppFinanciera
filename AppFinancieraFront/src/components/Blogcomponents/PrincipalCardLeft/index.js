import React from 'react'





function PrincipalCardLeft(props){
    const {
        title,
        bodyText,
        lastUpdate,
        imageSRC,
    } = props;

    return (
    <div className="w-50 mb-1"> 
        <div class="card mb-3">
            <img src={imageSRC} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{bodyText}</p>
                <p class="card-text">
                    <small class="text-muted">{lastUpdate}</small>
                </p>
            </div>
      </div>
    </div>
)
}


export default PrincipalCardLeft

