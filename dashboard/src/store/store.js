import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import forgotPasswordReducer from "./slices/forgotResetPasswordSlice.js";
import skillReducer from "./slices/skillSlice.js";
import projectReducer from "./slices/projectSlice.js";
import timelineReducer from "./slices/timelineSlice.js";
import softwareApplicationReducer from "./slices/softwareApplicationSlice.js";
import messageReducer from "./slices/messageSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    skill: skillReducer,
    project: projectReducer,
    timeline: timelineReducer,
    softwareApplications: softwareApplicationReducer,
    messages: messageReducer,
  },
});
