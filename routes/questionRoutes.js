const express = require("express");
const router = express.Router();
const { generateLimiter } = require("../utils/rateLimit");
const { generateQuestions, 
        getQuestionsByLesson,
        batchUpdateQuestions
     } = require("../controllers/questionController");


router.post("/lessons/:lessonId/generate", 
    generateLimiter,
    generateQuestions
);

router.get("/lessons/:lessonId", 
    getQuestionsByLesson
);

router.post("/batch-update", batchUpdateQuestions);

module.exports = router;
