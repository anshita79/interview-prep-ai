const questionAnswerPrompt = (role , experience , topicsToFocus , numberOfQuestions) => `
    You are an AI trained to generate technical interview questions and answers.
    Task:
    -Role: ${role}
    -candidate Experience: ${experience} years
    -Focus Topics: ${topicsToFocus}
    -Write ${numberOfQuestions} interview questions.
    -For each question , generate a detailed but beginner-friendly answer.
    -If the answer needs a code example , add a small code block inside
    -Keep formatting very clean.
    -Return a pure JSON array like:
    [
        {
            "question":"Question here?",
            "answer": "Answer here. "
        },
        ...

    ]
    Important : Do NOT add any extra text. Only return valid JSON.
    `;

    const conceptExplainPrompt = (question) => `
       You are an AI trained to generate explanations for a given interview question.
    Task:
    -Explain the following interview question and its concept in depth as if teaching a beginner developer.
    -Provide a short and clear title that summarizes the concept for the article or page header.
    -If the explanation includes a code example, add a small code block.
    -Keep the formatting very clean and clear.
    -Return ONLY a valid JSON object in this exact format:
    {
        "title": "<short title summarizing the concept>",
        "explanations": "<detailed explanation here>"
    }
    Input Question: ${question}
    Important: Do NOT add any text outside the JSON object. Ensure the JSON is valid and parsable. Return ONLY the JSON object.
        `;

        module.exports = { questionAnswerPrompt , conceptExplainPrompt};