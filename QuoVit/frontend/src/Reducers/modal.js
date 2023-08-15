const initialState = {
    showConfessModal: false,
    showFacultyModal: false,
    showIdeaModal: false,
    showPostModal: false,
    showPaperModal: false
}

export default function modal(state = initialState, action) {
    const actions = {
        "ShowConfessModal" : {
            showConfessModal: true
        },
        "HideConfessModal" : {
            showConfessModal: false
        },
        "ShowFacultyModal" : {
            showFacultyModal: true
        },
        "HideFacultyModal" : {
            showFacultyModal: false
        },
        "ShowIdeaModal" : {
            showIdeaModal: true
        },
        "HideIdeaModal" : {
            showIdeaModal: false
        },
        "ShowPostModal" : {
            showPostModal: true
        },
        "HidePostModal" : {
            showPostModal: false
        },
        "ShowPaperModal" : {
            showPaperModal: true
        },
        "HidePaperModal" : {
            showPaperModal: false
        },
    }

    return actions[action.type] || state
}