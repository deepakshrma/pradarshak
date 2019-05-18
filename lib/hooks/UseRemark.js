import {useEffect} from 'react'
const useRemark = (delay = 500) => {
    const ref  = {
        slideshow: null
    }
    useEffect(() => {
        setTimeout(() => {
            remark.create(
                {
                  navigation: {
                    scroll: false,
                    click: true
                  }
                }
              );

        }, delay);
    }, [])
    return ref
}
export default useRemark