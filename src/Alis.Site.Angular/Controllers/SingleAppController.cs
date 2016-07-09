using Microsoft.AspNet.Mvc;

namespace Alis.Site.Angular.Controllers
{
    public class SingleAppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
