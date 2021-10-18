import React from 'react';

export const VideoItemComponent = ({url}) => {
    const video_code = url.slice(url.indexOf("?v=")+3);
    return (
        <div dangerouslySetInnerHTML={
            {__html: 
                `<iframe 
                    width="100%" 
                    height="450" 
                    src="https://www.youtube.com/embed/${video_code}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allowfullscreen
                ></iframe>
                `
            }
        }/>
    )
}
