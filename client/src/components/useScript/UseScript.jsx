import { useEffect } from 'react';

const useScript = (id, url) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.id = id;
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [id, url]);
};

export default useScript;