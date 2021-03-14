using Newtonsoft.Json;
using quizMeServer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace quizMeServer.Services
{
    public class QuestionService
    {
        private static List<Question> questions = new List<Question>();

        public QuestionService()
        {
            //data.json acts as a database
            using (StreamReader reader = new StreamReader("data.json"))
            {
                string json = reader.ReadToEnd();
                questions = JsonConvert.DeserializeObject<List<Question>>(json);
            }
        }
       
        public List<Question> GetAll()
        {
            return questions;
        }

        public Question GetById(string id)
        {
            return questions.FirstOrDefault(question => question.Id == id);
        }

        public List<Question> GetByCategory(string category, int questionsCount)
        {
            Enum.TryParse(typeof(Category), category, true, out object parsedCategory);
            if(parsedCategory == null || !Enum.IsDefined(typeof(Category), parsedCategory))
            {
                return new List<Question>();
            }

            Random rnd = new Random();

            List<Question> result = questions
                    .Where(question => Enum.Equals(question.Category, parsedCategory) && !question.LastUsed)
                    .OrderBy(_ => rnd.Next())
                    .Take(questionsCount)
                    .ToList();

            List<string> currentUsed = result.Select(question => question.Id).ToList();
            SetLastUsed(currentUsed);

            return result;
        }

        public void SetLastUsed(List<string> ids)
        {
            questions
                .Where(question => question.LastUsed)
                .Select(question =>
                {
                    question.LastUsed = false;
                    return question;
                })
                .ToList();

            questions
                .Where(question => ids.Contains(question.Id))
                .Select(question =>
                {
                    question.LastUsed = true;
                    return question;
                })
                .ToList();
        }
    }
}
