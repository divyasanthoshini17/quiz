// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const submitResultapi = createApi({
//     reducerPath: "submitResultapi",
//     baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4500"}),
//     endpoints:(builder)=>({
//         submitResult:builder.mutation({
//             query:({ score, total }) => ({
//                 url: `/api/save-result`,
//                 method: "POST",
//                 body: { score, total },
//             }),
//         }),
//     }),
// });

// export const { useSubmitResultMutation } = submitResultapi;






const BASE_URL = "http://localhost:4500";
// const TRIVIA_API = "https://the-trivia-api.com/v2/questions?limit=5";

export const fetchQuestions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/quiz?limit=5`);
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data = await response.json();
        
        return data.map(q => ({
            question: q.question.text, 
            options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
            answer: q.correctAnswer
        }));
    } catch (error) {
        console.error("Error in fetchQuestions:", error);
        throw error;
    }
};

export const submitResult = async (score, total) => {
    try {
        const response = await fetch(`${BASE_URL}/api/save-result`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ score, total }),
        });
        return await response.json();
    } catch (error) {
        console.error("Failed to submit result:", error);
        throw error;
    }
};