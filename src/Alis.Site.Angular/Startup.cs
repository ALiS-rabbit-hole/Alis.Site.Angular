using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.DependencyInjection;
using ServiceStack;


namespace Alis.Site.Angular
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            Licensing.RegisterLicense("2603-e1JlZjoyNjAzLE5hbWU6VW5pdmVyc2l0eSBvZiBCaXJtaW5naGFtLFR5cGU6SW5kaWUsSGFzaDpZeW5IZEp2aDA1cXRGcndYU08xeUdvTDhtRVdmWExuZ0Z6RjBFSE52bXBLWjBJUWJSZG56Vk9lSHRZQ1hOSFBaRnVOQkZUbmNkUHFIejFqa2hsNnVtYlA1TWtiUkF6blZrYXgvVlJzb0dBNEhlUk9QdE92TlJZV0F3MWoxOFJDWHZIczNPMUtweWZTVVVldFRZcUlVWVRXT1lEdXZZVHdNcnJCOU1IeUwzMk09LEV4cGlyeToyMDE2LTA1LTE0fQ==");


            services.AddMvc(o => o.Filters.Add(new RequireHttpsAttribute()));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {


            app.UseIISPlatformHandler();
            app.UseStaticFiles();
            
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=SingleApp}/{action=Index}/{id?}");
            });
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
