import * as api from "../API";

export const getPapersByCourse = (courseName) => async (dispatch) => {
    try {
        const { data } = await api.fetchPapersByCourse(courseName);
        dispatch({ type: "FETCH_BY_COURSENAME", payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const downloadPaper = (courseName,id) => async () => {
        try{
            const res = await api.downloadPaper(courseName,id);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `quovit-${courseName}.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch(error) {
            console.log(error.message)
        }
}