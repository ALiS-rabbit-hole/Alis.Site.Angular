using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Alis.Site.Angular.Controllers
{
    public class AccountController : Controller
    {
        // GET: /<controller>/
        public IActionResult Login()
        {
          //  var client = new ServiceStack.JsonServiceClient("https://alis.ws");



            return View();
        }
    }
}
