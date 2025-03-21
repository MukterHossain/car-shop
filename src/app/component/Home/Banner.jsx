

const Banner = () => {
    const banners = [
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next:'#slide2',
            prev:'#slide4'
        },
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next:'#slide3',
            prev:'#slide1'
        },
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next:'#slide4',
            prev:'#slide2'
        },
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next:'#slide1',
            prev:'#slide3'
        },
    ]
  return (
    <div>
      <div className="carousel w-full mt-3 h-[80vh]">
      {banners.map((banner, i) =>(
        <div key={i} id={`slide${i+1}`}style={{backgroundImage:`linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${i+1}.jpg)`}}
          className="w-full carousel-item relative bg-top bg-no-repeat bg-cover rounded-xl">
            <div className="h-full w-full flex items-center pl-32 ">
              <div className="text-base-100 space-y-6">
                <h2 className="text-5xl font-bold">{banner.title}</h2>
                <p className="text-lg font-bold">{banner.description}</p>
                <button className="btn btn-primary hover:bg-gray-200 hover:text-red-600 mr-4 text-white">Discover More</button>
                <button className="btn btn-primary hover:bg-gray-200 hover:text-red-600 mr-4 text-white btn-outline">Latest Project</button>
              </div>
            </div>
            {/* left-5 right-5 top-1/2 flex -translate-y-1/2   */}
        <div className="absolute  flex transform justify-between bottom-12 right-12">
          <a href={banner.prev} className="btn btn-circle mr-6">
            ❮
          </a>
          <a href={banner.next} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      ))}
      
    </div>
    </div>
  );
};

export default Banner;
