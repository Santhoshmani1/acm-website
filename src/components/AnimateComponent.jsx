import { useInView } from "react-intersection-observer";

const Animate = ({ children }) => {
  const {ref, inView} = useInView({
    threshold: 0.2,
    triggerOnce:true,
    delay:100
  });

  return (
    <div ref={ref} className={`animated-component ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default Animate;