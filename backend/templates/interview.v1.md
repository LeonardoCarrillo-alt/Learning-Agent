# Prompts for Academic Interview Form Generation

## Prompt 1: Generate Interview Question

**Objective:**  
Ask the AI to generate an academic interview question about a specific subject.

**Instructions for the AI:**  

* Generate **one open-ended question** that can be used in an academic interview.  
* The question must be related to the specified subject.  
* The response must be **only in JSON format** with the following structure:

```json
{
  "subject": "<subject name>",
  "interview_question": "<generated question>"
}


## Prompt 2: Evaluate Answer and Generate Coaching Advice

**Objective:**  
Ask the AI to take the generated interview question and a student’s answer, then provide improvement advice.

**Instructions for the AI:**  

* Receive the data in JSON: the interview question and the student’s answer.  
* Evaluate the student’s answer and generate a short, constructive piece of advice for improvement.  
* Return **only in JSON format** with the following structure:

```json
{
  "subject": "<subject name>",
  "interview_question": "<generated question>",
  "student_answer": "<student's answer>",
  "coaching_advice": "<AI generated advice>"
}
