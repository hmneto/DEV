using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AppLocalizaServer.Model;

namespace AppLocalizaServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackingsController : ControllerBase
    {
        private readonly AppLocalizaDb _context;

        public TrackingsController(AppLocalizaDb context)
        {
            _context = context;
        }

        // GET: api/Trackings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tracking>>> GetTrackings()
        {
            return await _context.Trackings.ToListAsync();
        }

        // GET: api/Trackings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tracking>> GetTracking(int id)
        {
            var tracking = await _context.Trackings.FindAsync(id);

            if (tracking == null)
            {
                return NotFound();
            }

            return tracking;
        }

        // PUT: api/Trackings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTracking(int id, Tracking tracking)
        {
            if (id != tracking.Id)
            {
                return BadRequest();
            }

            _context.Entry(tracking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrackingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Trackings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tracking>> PostTracking(Tracking tracking)
        {
            _context.Trackings.Add(tracking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTracking", new { id = tracking.Id }, tracking);
        }

        // DELETE: api/Trackings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTracking(int id)
        {
            var tracking = await _context.Trackings.FindAsync(id);
            if (tracking == null)
            {
                return NotFound();
            }

            _context.Trackings.Remove(tracking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TrackingExists(int id)
        {
            return _context.Trackings.Any(e => e.Id == id);
        }
    }
}
