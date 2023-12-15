import * as Request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult([...res.data]);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        const res = await Request.getApi(`users/search?`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {}
};
