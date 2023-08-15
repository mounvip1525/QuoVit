import * as api from "../API";

export const getPapersByCourse = (courseName) => async (dispatch) => {
    dispatch({ type: "SET_QP_LOADING" })
    try {
        const { data } = await api.fetchPapersByCourse(courseName);
        dispatch({ type: "FETCH_BY_COURSENAME", payload: data })
    } catch (error) {
        alert(error.message)
    }
}

export const downloadPaper = (userId, courseName, id) => async () => {
    try {
        if (userId) {
            const res = await api.downloadPaper(courseName, id);
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `quovit-${courseName}.pdf`);
            document.body.appendChild(link);
            link.click();
        } else {
            alert("Login to download the papers")
        }
    } catch (error) {
        alert(error.message)
    }
}