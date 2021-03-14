using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using quizMeServer.Models;
using quizMeServer.Services;

namespace quizMeServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private QuestionService questionService => new QuestionService();
        
        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return questionService.GetAll();
        }

        [HttpGet("{category}")]
        public ActionResult<List<Question>> Get(string category)
        {
            string questionsCountString = Request.Query["count"];
            int.TryParse(questionsCountString, out int questionsCount);
            return questionService.GetByCategory(category, questionsCount);
        }
        
    }
}
