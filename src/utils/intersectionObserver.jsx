const observeIntersection = ({
  sectionRef,
  classNames,
  threshHold,
  setterFunc,
}) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entries);
        if (entry.isIntersecting) {
          setterFunc && setterFunc(true);
          classNames?.map((item, id) => {
            return entry.target.children[id].classList.add(`${item}`);
          });
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // adjust the threshold as per your need
      //threshHold ? threshHold :
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
};

export default observeIntersection;
