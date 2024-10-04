using ECommerceWebAPI.Entities;
using ECommerceWebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ECommerceWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _service;
        private readonly NotificationService _nservice;

        public OrderController(OrderService service, NotificationService nservice)
        {
            _service = service;
            _nservice = nservice;
        }

        [Authorize(Roles ="Admin, CSR, Customer")]
        [HttpGet]
        public async Task<IEnumerable<Order>> Get()
        {
            var role = User.FindFirstValue(ClaimTypes.Role);

            if (role.Equals("Admin") || role.Equals("CSR"))
            {
                return await _service.GetAll();
            }
            else
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                return await _service.GetAll(userId);
            }
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Order?>> GetById(String id)
        {
            var response = _service.GetOrderById(id);
            return response is not null? Ok(response) : NotFound();
        }

        [Authorize(Roles = "Customer")]
        [HttpPost]
        public async Task<ActionResult> Add([FromBody] Order request)
        {
            _service.Add(request);            
            return Ok(new { Message = "Order added successfully" });
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("UpdateStatus")]
        public async Task<ActionResult> UpdateStatus([FromBody] string orderId, string orderStatus)
        {
            _service.UpdateStatus(orderId, orderStatus);
            return Ok(new { Message = "Order status updated successfully" });
        }

        [Authorize(Roles = "Customer")]
        [HttpPost("RequestCancelOrder/{id}")]
        public async Task<ActionResult> RequestCancelOrder(string orderId)
        {
            string msg = "Please cancel Order: " + orderId;
            _nservice.Add(null, msg);
            return Ok(new { Message = "Order status updated successfully" });
        }

        [Authorize(Roles = "CSR")]
        [HttpPut("CancelOrder")]
        public async Task<ActionResult> CancelOrder([FromBody] string orderId)
        {
            _service.UpdateStatus(orderId, "Canceled");
            return Ok(new { Message = "Order is cancelled" });
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(String id)
        {
            _service.Delete(id);
            return Ok(new { Message = "Order deleted successfully" });
        }
    }
}
