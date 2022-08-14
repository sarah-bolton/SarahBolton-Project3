function DisplayPhotos({ photos }) {
    return (
        <section className="background-img">
            {/* error handling if no photos are found */}
            {photos.length === 0 ? (
                // <h2></h2>
                <img src="https://images.unsplash.com/photo-1615149598868-8bc923532ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="bgimg"></img>
            ) : (
                <>
                    <div className="photos">
                        {/* // mapping over the result to return imgs (urls and alt description) */}
                        {photos.map((photo) => {
                            return (
                                <div className="photo-container" key={photo.id}>
                                    <img src={photo.urls.regular} alt={photo.alt_description} className="unsplashimg" />
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
}

export default DisplayPhotos;