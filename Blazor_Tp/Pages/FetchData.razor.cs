using Blazor_Tp.Data;
using Microsoft.AspNetCore.Components;
using System;
using System.Threading.Tasks;

namespace Blazor_Tp.Pages
{
    public partial class FetchData
    {
        [Inject]
        WeatherForecastService ForecastService { get; set; } = null!;

        private WeatherForecast[]? forecasts;

        protected override async Task OnInitializedAsync()
        {
            forecasts = await ForecastService.GetForecastAsync(DateTime.Now);
        }
    }
}
